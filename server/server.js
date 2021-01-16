const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
require("dotenv").config();
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
app.use(cookieParser());

//========================
//			MODEL
//========================
const { User } = require("./models/user");
const { Brand } = require("./models/brand");
const { Wood } = require("./models/wood");
const { Product } = require("./models/product");

//========================
//			MIDDLEWARE
//========================
const { auth } = require("./middleware/auth");
const { admin } = require("./middleware/admin");

//========================
//			PRODUCT
//========================

app.post("/api/product/article", auth, admin, (req, res) => {
	const product = new Product(req.body);

	product.save((err, doc) => {
		if (err) return res.json({ succes: false, err });
		res.status(200).json({
			succes: true,
			product: doc,
		});
	});
});

// API /api/product/articles_by_id?id=23423dsada,423432,432&type=array
app.get("/api/product/articles_by_id", (req, res) => {
	let type = req.query.type;
	let items = req.query.id;

	if (type === "array") {
		let ids = req.query.id.split(",");
		items = [];
		items = ids.map((item) => {
			return mongoose.Types.ObjectId(item);
		});
	}

	Product.find({ _id: { $in: items } })
		.populate("brand")
		.populate("wood")
		.exec((err, doc) => {
			if (err) return res.json({ succes: false, err });
			return res.status(200).send(docs);
		});
});

// BY ORDER
//article&sortBy=creatAt&order=desc&limit=4

// BY SELL
//article&sortBy=sold&order=desc&limit=100&skip=5
app.get("/api/product/articles", (req, res) => {
	let order = req.query.order ? req.query.order : "asc";
	let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
	let limit = req.query.limit ? parseInt(req.query.limit) : 100;
	//let skip = req.query.skip ? req.query.skip : 100;

	Product.find()
		.populate("brand")
		.populate("wood")
		.sort([[sortBy, order]])
		.limit(limit)
		.exec((err, articles) => {
			if (err) return res.json({ succes: false, err });
			res.send(articles);
		});
});

//========================
//			WOOD
//========================

app.post("/api/product/wood", auth, admin, (req, res) => {
	const wood = new Wood(req.body);

	wood.save((err, doc) => {
		if (err) return res.json({ succes: false, err });
		res.status(200).json({
			succes: true,
			wood: doc,
		});
	});
});

app.get("/api/product/woods", (req, res) => {
	Wood.find({}, (err, woods) => {
		if (err) return res.json({ succes: false, err });
		res.status(200).send(woods);
	});
});

//========================
//			BRAND
//========================
app.post("/api/product/brand", auth, admin, (req, res) => {
	const brand = new Brand(req.body);

	brand.save((err, doc) => {
		if (err) return res.json({ succes: false, err });
		res.status(200).json({
			succes: true,
			brand: doc,
		});
	});
});

app.get("/api/product/brand", (req, res) => {
	Brand.find({}, (err, brands) => {
		if (err) return res.json({ succes: false, err });
		res.status(200).send(brands);
	});
});

//========================
//			USER
//========================
app.get("/api/users/auth", auth, (req, res) => {
	res.status(200).json({
		isAdmin: req.user.role === 0 ? false : true,
		isAuth: true,
		email: req.user.email,
		name: req.user.name,
		lastname: req.user.lastname,
		role: req.user.role,
		card: req.user.cart,
		history: req.user.history,
	});
});

app.get("/api/users/logout", auth, (req, res) => {
	User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
		if (err) return res.json({ succes: false, err });
		return res.status(200).send({
			succes: true,
		});
	});
});

app.post("/api/users/register", (req, res) => {
	const user = new User(req.body);

	user.save((err, doc) => {
		if (err) {
			return res.json({
				succes: false,
				err,
			});
		}

		res.status(200).json({
			succes: true,
			// userData: doc
		});
	});
});

app.post("/api/users/login", (req, res) => {
	//Find the mail
	User.findOne({ email: req.body.email }, (err, user) => {
		if (!user)
			return res.json({
				loginSuccess: false,
				message: "Auth failes,email not found",
			});

		//Check Password
		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch) {
				return res.json({
					loginSuccess: false,
					message: "Wrong Password",
				});
			}
			//Generate token
			user.generateToken((err, user) => {
				console.log(err);
				if (err) return res.status(400).send(err);
				res.cookie("w_auth", user.token).status(200).json({
					loginSuccess: true,
				});
			});
		});
	});
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
	console.log(`server running at ${port}`);
});
