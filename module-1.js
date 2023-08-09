const config = {
  url: "https://vsemaiki.com",
  port: 5500,
};

function foo() {
  console.log("Connection to " + config.url);
}

export { config, foo };
