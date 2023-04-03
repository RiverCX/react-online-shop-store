// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "river" },
  { id: 2, name: "echo" },
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
