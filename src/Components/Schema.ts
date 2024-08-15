import { z } from 'zod';

const productImageSchema = z.object({
  url: z.string(),
});

const productPriceSchema = z.object({
  priceIncTax: z.number(),
});

const brandSchema = z.object({
  brandImage: z.object({
    url: z.string(),
  }),
});

const attribsSchema = z.object({
  isBestSeller: z.boolean() || z.undefined(),
});

const productSchema = z.object({
  id: z.string(),
  productName: z.string(),
  image: productImageSchema,
  price: productPriceSchema,
  reviewsCount: z.number(),
  score: z.number(),
  averageRating: z.number(),
  brand: brandSchema,
  attributes: attribsSchema,
});

export { productSchema };
