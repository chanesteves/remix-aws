const { redirect } = require("@remix-run/node");

const { logout } = require("~/session.server");

export const action = async ({ request }) => {
  return logout(request);
};

export const loader = async () => {
  return redirect("/");
};
