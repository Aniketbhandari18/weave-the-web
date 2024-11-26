import { children, childrenTop, childrenBottom } from "./children.js";
import { mens, mensTop, mensBottom } from "./men.js";
import { womens, womensTop, womensBottom } from "./women.js";

// export let all = [];
// all = mens.concat(womens);
// all = all.concat(children);

export let allTop = [];
allTop = mensTop.concat(womensTop);
allTop = allTop.concat(childrenTop);

export let allBottom = [];
allBottom = mensBottom.concat(womensBottom);
allBottom = allBottom.concat(childrenBottom);

export let all = [];
all = allTop.concat(allBottom);


all = [
    {
        "img": "https://i.pinimg.com/564x/46/84/76/46847659f4e8c04f93c22fa5a611dc3b.jpg",
        "name": "Men Drawstring Waist Straight Leg Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 105
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/control/564x/e6/69/7f/e6697fc03f33affcffce904d24ace666.jpg",
        "name": "Alicia Floral Embroidery V-Neck Blouse",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 254
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/88/d3/30/88d330004ae56a59e5efa354c50524c0.jpg",
        "name": "Men designer shirt button up (white)",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 251
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/a0/f7/7c/a0f77c104afbb573c99d972fb9519718.jpg",
        "name": "Solid High Waist Straight Leg Pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 112
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/6e/d3/96/6ed396e54d5d58713f6294ee787e8c15.jpg",
        "name": "Elastic Waist Joggers with Pockets",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 452
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/42/84/c1/4284c1592e1b2ccd9367b38f93af46e1.jpg",
        "name": "Men Plants Print Button Up Shirt Without Tee ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 251
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/13/5a/8e/135a8ea70ed636b1623ea59486eb7914.jpg",
        "name": "ASOS DESIGN oversized tapered smart trouser in green with pleat",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 156
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/control/564x/c2/dd/14/c2dd14171ff54bc78183788b19fac482.jpg",
        "name": "Men Geo Print Shirt Without Tee",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 214
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/1f/f8/03/1ff803f999bfcf655ab4f20a01b379b9.jpg ",
        "name": "cream colour shorts for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 985
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/5b/a1/bd/5ba1bd6243ce9afe0c41662c1897ecfd.jpg",
        "name": "Mens Spacecraft & Alien Pattern Printed Hoodie",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 92
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/a8/a1/f1/a8a1f1550278a9061e6c65a50071fd2f.jpg",
        "name": "Men Geo Print Shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 129
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/a1/b5/18/a1b518caba272ee8667d169164789e0b.jpg",
        "name": "Men Casual Hawaiian Shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 196
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/eb/d6/5d/ebd65d19bad5f2cd82cdaccb61fb66b8.jpg",
        "name": "Weiphoto Hong Kong Style Ins Wide-leg Jeans ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 456
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/enabled/564x/b6/2e/5b/b62e5bb7762622b1cb510a4473205652.jpg ",
        "name": "green top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 185
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/d7/6f/b1/d76fb1799aabee7ee715340a6c2c333b.jpg",
        "name": "QL Relaxed Chinos Urban Classik in Khaki ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 187
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/8b/e8/b6/8be8b6561ec04e97269facbceb8d6230.jpg",
        "name": "Aliyuezu Man Pants Solid Color Slim Casual Pant ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 1256
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/15/39/be/1539bebfa5abce4a70c050b562e97041.jpg",
        "name": "Casual Loose Wide-Leg High-Waisted Straight Pants ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/42/39/08/4239084b2f5b4cd163b244e3e7ede165.jpg ",
        "name": "denem jeans",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 253
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/92/b5/aa/92b5aa81653ea91b455d034267144916.jpg",
        "name": "1970s Ossie Retro Puff Sleeve Blouse ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/control/564x/60/ca/d9/60cad981a997105de305a63eae0820b5.jpg",
        "name": "Button Waist Wide Legs Bottom",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 262
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/eb/da/54/ebda54227b1392007adfae37c0584d05.jpg",
        "name": "Kpop High Waist Pinstriped Print Shorts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 231
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/56/e2/49/56e249d125ab5d7ab5d6276ff115855e.jpg ",
        "name": "pyjama like pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 753
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/4d/ea/77/4dea77778a88f35fb1cfcb9b6203f9bb.jpg  ",
        "name": "REBEL printed white t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 154
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/9b/9f/4b/9b9f4bb2945a3c7f95626531ea71ed8b.jpg",
        "name": "Männer 1 Stück Shirt mit Pflanzen Muster ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 321
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/a7/bf/4a/a7bf4aa20e4988c2dd8f8ca8e0b92037.jpg  ",
        "name": "orange cotton and wooden mix material t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 367
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/enabled/564x/f8/f4/fb/f8f4fb65f0642ca2a655f5adaef3dc40.jpg  ",
        "name": "boys slant pocket pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 357
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/736x/45/a1/36/45a136b976f95be5e57fd41d6024bf91.jpg  ",
        "name": "dark blue cargo pants for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 125
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/73/1f/a8/731fa8b7ef686439ae41fcec6103c74a.jpg",
        "name": "Slit Pocketed High Waist Wide Leg Pants - Black",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 196
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/0f/a6/d0/0fa6d06ef19afc2e4670c9502aec1aae.jpg",
        "name": "White Womens Chinos Pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 197
        },
        "price": 999
    },
    {
        "img": " https://i.pinimg.com/564x/03/47/92/034792598efde98c58a20b6c92826db6.jpg ",
        "name": "dark grey cotton t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 185
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/66/bf/b0/66bfb03cbe857ad4cdc8fd0a8c59910d.jpg",
        "name": "Men Two Tone Corduroy Cargo Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 165
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/a4/64/26/a4642649aa9e556e561d0a05559d5362.jpg ",
        "name": "printed denem jeans",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 215
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/c1/79/31/c17931195575d306b0b3a27936911051.jpg  ",
        "name": "white cotton sweater",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 756
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/c5/fc/72/c5fc7247a01983e6457e69dee680b6b7.jpg",
        "name": "Casual Long Sleeves Printed Lapel Blouses&Shirts Tops",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 125
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/7c/b2/14/7cb214460b009109cc8b7278a05aff07.jpg",
        "name": "Women Classic Custom Designer Bell Bottom Pant",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 369
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/a3/53/81/a3538138fb1d6c5dbb460eedf5e89255.jpg",
        "name": "Men white shirt button up ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 267
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/736x/7a/03/a0/7a03a03dcb8df2a0d65eef36745fbccc.jpg",
        "name": "Hand block printed cotton floral top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 198
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/68/b2/e8/68b2e80308114f97d780074cc0058115.jpg",
        "name": "304 Albion Carpenter Pant ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 142
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/736x/08/6f/0e/086f0e48226d902d846e9a9c9cd5cab5.jpg",
        "name": "Versatile casual pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 356
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/09/7a/16/097a16ae6e86fba20ac968fdda3b9897.jpg",
        "name": "White cotton trousers ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 125
        },
        "price": 899
    },
    {
        "img": " https://i.pinimg.com/enabled/564x/24/8b/b8/248bb8d4b0d11d3826a6111b8563c77c.jpg ",
        "name": "dark brown shorts for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 775
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/a2/36/4d/a2364d3eb70ddb0d1fc33b47700597ff.jpg  ",
        "name": "dark blue cotton t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 96
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/9f/3c/d2/9f3cd23e6aa55adc6877103b767609e3.jpg",
        "name": "Plain Pattern Cropped Pants With Drawstring ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 179
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/c8/97/8d/c8978da1a6233b7ce55bab7656e4a632.jpg",
        "name": "Anna top for girls",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 154
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/9a/de/a4/9adea4210d9767e19cde32138d91aad6.jpg ",
        "name": "Men Floral Print Retro Casual Button Up Shirt ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 195
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/de/58/d4/de58d4955c131d2053666c572418d17b.jpg",
        "name": "kkboxly Mens Letter Print Joggers, Casual Medium Stretch Tapered Sports Pants ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/ac/d1/b9/acd1b93c28f112d1eceef197fe50a225.jpg",
        "name": "Men Chinese Letter & Mountain Print Tee",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 267
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/c4/62/16/c46216f7d5ef2b799bcb0a9f0f3f8881.jpg",
        "name": "DICKIES 874 Original Flex Fit Mens Pants ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 178
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/ed/18/92/ed1892b4082f7b9c86cd9d3b0badf6df.jpg  ",
        "name": "half sleeve sky blue t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 756
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/11/89/d6/1189d64972944c677b496ec5aefcf83f.jpg",
        "name": "Chatoyant Basic Bell Bottoms Black",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 456
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/ce/b5/7f/ceb57f434734ba28f63c2f0e6c074f72.jpg",
        "name": "Men Floral Print Shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 263
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/51/a9/05/51a905233cc9ecbbbd9841b0b3cb409b.jpg",
        "name": "Casual Solid Basic O Neck Short Sleeve Two Pieces",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 254
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/736x/cf/0a/6a/cf0a6a10c065dc2f30e9addd425acfc0.jpg ",
        "name": "half sleeves top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 256
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/4c/ef/b4/4cefb47074b4653d970f794e1cd6d68b.jpg",
        "name": "High Waist Straight Trousers With Pockets Wide Leg Casual Suit Pants For Women",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 92
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/c1/5a/55/c15a555d5d75a287ed27b69971096074.jpg",
        "name": "High Waist Straight Jeans",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 125
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/b1/66/fd/b166fdaa0241e8c24bedc9e4bf0b9662.jpg",
        "name": "Colourful half-sleeve top for women ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 136
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/46/e0/19/46e0198f13db37ddf580f126b90437d2.jpg",
        "name": "Vintage Men Short Sleeve Shirt - Blanc et Noir / XL",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 365
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/88/b1/ba/88b1ba4ad2a28bc44714463142a11719.jpg",
        "name": "1pc Young Boys Street-Style Workwear Solid Color Woven Pants ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 136
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/d6/bf/6b/d6bf6b9fed961ed7a291828808991cdd.jpg",
        "name": "Full Size Tassel Wide Leg Pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 222
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/736x/5a/c1/8d/5ac18d5f6b3d334d67bf50189141de29.jpg ",
        "name": "Half Sleeves Top for Girls",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 356
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/b4/94/8f/b4948f45e0e69d8378bddd0b0569ba59.jpg",
        "name": "Flap Pocket Side Knot Hem Cargo Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 562
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/d5/7d/8c/d57d8c0a69f86d2c9b50a8cfa9454311.jpg",
        "name": "Cotton Short Top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 189
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/control/564x/08/6a/98/086a98e69162a8d344ebe112c59d4b0a.jpg",
        "name": "Butterflies Print Women Soft Casual Loose Female Hoodies",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 112
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/2d/c0/4f/2dc04fdf19ac48a04f8269de519287d4.jpg ",
        "name": "casual jeans for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 225
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/2f/7d/9d/2f7d9dbda14bbcaeecced673dbdc5249.jpg",
        "name": "men dual color shirt baige / green ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/bd/a2/ee/bda2eed4ead8d92fd9b6d6a4e3c55c4c.jpg",
        "name": "Cotton Short Sleeves T-Shirt - Dark blue ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 198
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/60/d6/d4/60d6d46a6623fde618ba720e3751c865.jpg",
        "name": "High Waist Plicated Detail Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 183
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/8b/12/91/8b12916248de97bc7dc0eb151812d6a0.jpg",
        "name": "Adeltrud® | Chic and Versatile Blouse",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 195
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/control/564x/b8/e6/9c/b8e69ce1519856e4a7af123104818d2f.jpg",
        "name": "Men Shirt Button Up Shirt Casual Shirt Summer Shirt Waffle",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 187
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/50/9e/fc/509efc94a329dfe10c1c6b5842d43af3.jpg",
        "name": "High Waist Butterfly Print Straight Leg Pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 236
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/enabled/564x/1a/1b/22/1a1b22d6560da2433f4d467138feda9b.jpg ",
        "name": "blue shorts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 985
        },
        "price": 699
    },
    {
        "img": " https://i.pinimg.com/564x/6c/0a/69/6c0a69751c2e6d26a931ecd8831c3433.jpg ",
        "name": "half sleeves  blue t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 854
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/24/5e/18/245e187f584726c2c5e9ff811586b439.jpg",
        "name": "printed pyjama",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 253
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/736x/43/ec/aa/43ecaa848e890fe6881e9f8be16f637b.jpg ",
        "name": "LV t-shirt for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 125
        },
        "price": 499
    },
    {
        "img": " https://i.pinimg.com/564x/e6/bf/01/e6bf01c04d387be2f4e1ff8c4d7ebfd6.jpg ",
        "name": "grey pyjama",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 356
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/5a/0a/2b/5a0a2bc63d8c9217677f318a04ada4a2.jpg",
        "name": "3 Pieces Letter Printed Jogger Pants Set",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 365
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/48/1f/5c/481f5c8d43f72ad1776b842bec79d7a5.jpg",
        "name": "Elastic Waist Pocketed Joggers - Charcoal",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 129
        },
        "price": 419
    },
    {
        "img": "https://i.pinimg.com/564x/2e/53/2e/2e532efc89c34fab9175937a4b5bdd54.jpg ",
        "name": "girls casual bottom wear",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 452
        },
        "price": 699
    },
    {
        "img": " https://i.pinimg.com/736x/2f/6e/27/2f6e276d92fc899b1d322139307287ba.jpg ",
        "name": "black shorts for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 551
        },
        "price": 699
    },
    {
        "img": " https://i.pinimg.com/564x/84/89/c9/8489c9273030b8b3f02c1645f1d612a7.jpg",
        "name": "tri-color half sleeve t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/17/42/a7/1742a7acad2f971df2c714951a114ea6.jpg",
        "name": "men dual color shirt baige / black ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 181
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/af/f6/53/aff653e49198af70e0876fcb3171dd60.jpg",
        "name": "Single Pleat Pant In Tumbled Hemp Canvas",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 198
        },
        "price": 899
    },
    {
        "img": " https://i.pinimg.com/564x/a4/41/bb/a441bb099e44a7d5ed0517b5b40b6030.jpg ",
        "name": "birthday girl printed t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 85
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/7e/64/74/7e647473e706e260df6ee530c9042093.jpg",
        "name": "Vintage Womens Retro Loose T-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 259
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/control/564x/8f/3b/71/8f3b713a0dde21e0a411a96ad1c0ba50.jpg",
        "name": "Urban Solid Color Lapel Long Sleeves Blouse",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 156
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/8e/28/ae/8e28aecbcae82354b636506e07682fd2.jpg",
        "name": "Hazel Blues® | Zenana Mock Neck Short Sleeve Cropped",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 362
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/93/19/39/931939a1ee4644f70c70bce464d67e9b.jpg",
        "name": "Mens 20% Linen Shirt Short Sleeve Turndown Green, khaki, Beige Shirt Daily",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 251
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/83/fc/a5/83fca5c97afc8fb4afdfe9d41cbcd154.jpg",
        "name": "Men Coconut Tree Print Ombre Shirt Without Tee",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 278
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/00/bc/25/00bc25e4954851d2e23ec9ab3556d94e.jpg  ",
        "name": "grey cargo pants for boys",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 951
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/93/3b/92/933b920b1c6d96030995795843e871e9.jpg",
        "name": "Men 3pcs Letter Patched Drawstring Waist Track Shorts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 356
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/62/44/67/624467b4b40eb2e39cd7c2e375ae63e9.jpg",
        "name": "grey shorts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 789
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/32/6e/8e/326e8e4fdd9eea5a8d5fa26fd8157f67.jpg",
        "name": "Grunge Clothes for Women Y2K Tops ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 159
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/control/564x/2c/63/cd/2c63cd73e582af47936a9f5fbca0bf4c.jpg",
        "name": "Falling Foliage Blouse",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 269
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/f9/5e/0d/f95e0d2f213d6af283d43d928d1935cd.jpg",
        "name": "Drawstring Smocked Waist Wide Leg Pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 620
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/ed/6e/81/ed6e810c0f8ff285b606f57313154eaa.jpg",
        "name": "printed t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 187
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/7c/f5/3f/7cf53f65746bf887502244810cbc5498.jpg",
        "name": "Women Flare Jeans Slim Waist Bell Bottom",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 111
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/control/564x/68/b2/e8/68b2e80308114f97d780074cc0058115.jpg",
        "name": "304 Albion Carpenter Pant - Bone",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 899
    },
    {
        "img": " https://i.pinimg.com/564x/a3/45/6d/a3456d9f2285767d1c632093af6b072a.jpg",
        "name": "green pyjama",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 785
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/f5/94/5f/f5945f930ecea4e6068eaa93e48b2fba.jpg",
        "name": "The H&M Items Im Buying to Look Like a French Girl",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 354
        },
        "price": 799
    },
    {
        "img": " https://i.pinimg.com/564x/b5/c0/95/b5c095e97b900601e50166fdbad15875.jpg ",
        "name": "half sleeves green t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 364
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/control/564x/d0/69/2e/d0692e4f1456e0bd886222c443848433.jpg",
        "name": "Men Solid Straight Leg Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 178
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/5d/06/f5/5d06f5b9fa2748a80ead6cfa1655971e.jpg",
        "name": "Arlen® | Casual and Effortless general Top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 365
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/86/2f/9f/862f9f107961036737bf7ec9e0104367.jpg",
        "name": "Full Size Ribbed Round Neck Short Sleeve T-Shirt - Black / M",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 287
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/22/1d/ef/221def83ae13acdb99c632927656f935.jpg",
        "name": "Men designer shirt button up ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 152
        },
        "price": 699
    },
    {
        "img": " https://i.pinimg.com/564x/e1/52/7d/e1527d03a0be099f34bdcca6178658d6.jpg ",
        "name": "half sleeve forest green t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 154
        },
        "price": 499
    },
    {
        "img": " https://i.pinimg.com/736x/7f/05/83/7f058360b8329966f05944cb5a2402b0.jpg ",
        "name": "printed grey t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 123
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/b6/a9/ac/b6a9ac8a36be9db68b1df1f2119dca78.jpg ",
        "name": "blue skirt for girls",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 154
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/6d/b3/e6/6db3e61ab9313c54f48acd6df1de2fbd.jpg  ",
        "name": "pink skirt for girls",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 785
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/97/93/70/979370ac8e76ca9aec174ed0fcc046e5.jpg",
        "name": "Men Contrast Side Seam Drawstring Waist Joggers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 159
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/control/564x/03/4b/ca/034bcaacf09ddf12823e48e134eb2772.jpg",
        "name": "Men Fleece Lined Denim Shirt ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 362
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/564x/07/0d/25/070d25b8a007629132ffd5b8151cd60c.jpg",
        "name": "Men's Blue Linen Flare Trousers",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 195
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/41/19/1d/41191d1be951ae85c4458425ebbfcc80.jpg ",
        "name": "check designed pants",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 159
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/736x/d1/09/37/d10937481de924f6e87f9ccf8ff14567.jpg",
        "name": "Timeless Charm: Vintage Geometric Mock Neck T-Shirts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 290
        },
        "price": 699
    },
    {
        "img": "https://i.pinimg.com/control/564x/51/66/70/5166704be8ce504ab15117045d98fbcb.jpg",
        "name": "Unisex Oversized Stripe Long Sleeve T Shirts",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 174
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/564x/2b/ec/23/2bec23010d762bb688287fd3c3daa2f3.jpg",
        "name": "Full Size Wide Leg Pants with Pockets",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 114
        },
        "price": 999
    },
    {
        "img": "https://i.pinimg.com/564x/fb/87/4f/fb874f08c1010a277fef876c3e227b6c.jpg",
        "name": "Thai Elephant Print Harem Trousers - Black",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 198
        },
        "price": 899
    },
    {
        "img": "https://i.pinimg.com/564x/b6/a2/60/b6a260ed5e5e3d45c8ae726e6c21fc2e.jpg",
        "name": "Casual shirt made from linen and cotton ",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 245
        },
        "price": 799
    },
    {
        "img": "https://i.pinimg.com/enabled/564x/49/70/a0/4970a0fa247980142531d88dbedfe776.jpg ",
        "name": "blue shorts for girls",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 154
        },
        "price": 699
    },
    {
        "img": " https://i.pinimg.com/564x/11/be/cb/11becbe08261492ace64b01f1ce3afda.jpg ",
        "name": "baby pink half sleeve t-shirt",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 369
        },
        "price": 499
    },
    {
        "img": "https://i.pinimg.com/564x/fb/ff/79/fbff79d6d19f88968ad6771374cf62a6.jpg  ",
        "name": "stylish blue top",
        "rating": {
            "star": "★★★★☆",
            "ratingNumber": 145
        },
        "price": 499
    }
]


