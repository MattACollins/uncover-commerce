# Uncover Shopify Theme

The uncover shopify theme is made up of:

- Shopify Dawn theme
- Laravel Mix
- Tailwindcss
- Alpinejs

**Shopify Dawn Theme**
This is the foundation of the theme and is the base for the uncover theme.

**Laravel Mix**
Laravel mix is used to compile Tailwindcss and Aplinejs along with any other custom css/js in the theme.

**Tailwindcss**
Front end framework

**Alpinejs**
Javascript library to simplify the theme development

## Getting Started
Connect to the Shopify CLI
`shopify login --store uncover-theme-developement.myshopify.com`
You will need to be signed into the store as a store user - Not with the Shopify partners account.
Run the shopify theme serve command to get the local enviroment set up:
`shopify theme serve`

## Tailwinds and Aplinejs
Make sure that you run `npm i` first to make sure you have all of the required packages if this is your first ussage of this theme.
To complile tailwindcss and apline simply run:
`npx mix watch`

