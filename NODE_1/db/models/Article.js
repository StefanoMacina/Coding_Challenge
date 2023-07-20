const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const articleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: false,
  },
}, { timestamps: true, strict: true });

articleSchema.pre("save", function (next) {
    this.slug = this.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    next();
});

const Article = model("Article", articleSchema);

module.exports = Article;