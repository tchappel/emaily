const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

const authRouter = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"] || keys.GOOGLE_CLIENT_ID,
      clientSecret:
        process.env["GOOGLE_CLIENT_SECRET"] || keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      // state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token: ", accessToken);
      console.log("refresh token: ", refreshToken);
      console.log("profile: ", profile);
    }
    /*     function verify(accessToken, refreshToken, profile, cb) {
        db.get(
          "SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?",
          ["https://accounts.google.com", profile.id],
          function (err, cred) {
            if (err) {
              return cb(err);
            }

            if (!cred) {
              // The account at Google has not logged in to this app before.  Create a
              // new user record and associate it with the Google account.
              db.run(
                "INSERT INTO users (name) VALUES (?)",
                [profile.displayName],
                function (err) {
                  if (err) {
                    return cb(err);
                  }

                  var id = this.lastID;
                  db.run(
                    "INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)",
                    [id, "https://accounts.google.com", profile.id],
                    function (err) {
                      if (err) {
                        return cb(err);
                      }

                      var user = {
                        id: id,
                        name: profile.displayName,
                      };
                      return cb(null, user);
                    }
                  );
                }
              );
            } else {
              // The account at Google has previously logged in to the app.  Get the
              // user record associated with the Google account and log the user in.
              db.get(
                "SELECT * FROM users WHERE id = ?",
                [cred.user_id],
                function (err, user) {
                  if (err) {
                    return cb(err);
                  }
                  if (!user) {
                    return cb(null, false);
                  }
                  return cb(null, user);
                }
              );
            }
          }
        );
      } */
  )
);

authRouter.get("/google", passport.authenticate("google"));

authRouter.get("/google/callback", passport.authenticate("google"));

module.exports = authRouter;
