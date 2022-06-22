This is a [Next.js](https://nextjs.org/) project making use of [Spoonacular](https://spoonacular.com) API

## How to run project

1. Build your container: `docker build -t ingredients-app .`.
2. Run your container: `docker run --env SPOONACULAR_API_KEY={ApiKey} -p 3000:3000 ingredients-app`. where `{ApiKey}` must be provided

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
