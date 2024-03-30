import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-400">
        <div className="mx-auto customContainer space-y-8 py-16 lg:space-y-16 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-accent-light">PrinoPixel</div>

              <p className="mt-4 max-w-xs text-accent-light">
                Prinopixel offers bespoke IT solutions and development services,
                including custom software, mobile apps, website design, and IT
                consulting.
              </p>

              <ul className="mt-8 flex gap-6 text-accent-light">
                <li>
                  <Link
                    to="https://www.facebook.com/prinopixel"
                    target="_blank"
                    className="text-accent-light transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                        x1="9.993"
                        x2="40.615"
                        y1="9.993"
                        y2="40.615"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2aa4f4"></stop>
                        <stop offset="1" stop-color="#007ad9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                      ></path>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.instagram.com/prinopixel/"
                    target="_blank"
                    className="text-accent-light transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>

                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/klEQVR4nO3Uf0zUdRzH8e/xKzWJDH/A8UO6U0TWoAARySUx44cYWhKIcNwJMn8FxDR1MYoombRqEMsZUDgz0gWzgKIxMH5tLbUCf4GBAhPojl8dxwFHx/Fs3G1tuX2Z629f2/eP7/Z5vx/f7/vz2UcQHuX/JHzdZHSEl74p3Fs/F7V2gpef1hHtoWO7XEeUp56I9XpC/abZvHkGv0jTmO8OU53vTsIeqnmUTPdxzCote5aOorIeIlmiIcWun5QlfSTbDZjfVTbDxD8xyi5nLds89YQGTLMhbJZnd5C9YPN4+7GMvVZDpDz1Bye2tHG1ToN2xIBYtGojv1yc5pDPOFFrJggJNBAYadwpCuxzbevcH1DPu9ENTIwYaMhv50xwFYXycj6VnaVAXs5Ha74hb30FWb7fkR1ZT0VBN1qNkSOyEV6VjrPVd3JYFMj0rzKcXF9BV00Pv51s4HtpOk1OCpqdEmh1SqTFKYFG5yRqXN+g3D2PHzNbeN+7kupPOrhSO0Tyov750RlFgSL5l1S6ZTGj0dLmm8Z1qZLbLkruSFX0BL2J+thZBo+V0RF0lCvOCjoOnjavLwmqZGLYwP7AOvYt60IU+MlZxTWpwjzf3uVJDC/eg856NzOq08yptRg/q2empAGTRstIWgm3XVRcc1ZwWZpirsnzquTQxlpx4KaLkp7lSebF0zYxGO23Y/JTwdAYBCpg5VZMjhHM+qSaQd3adHpWJHFDqjTXnFv9IfMjFgXU9glMWcVajoj7i7DRH4regbpyiJNBjBwivGFDAJyvxpRexJQklgGHRHNJi5OCMo9CcWD+q+dWvmQBYuWwdwV8dRhaSyBDAmk2cGAJKFdB/UXIzcPkGM6UdYy55IZLEo3OSnFgbkUYhPhYgNdt4S0BimUwqYbzcigS4JQAH8hAp4GMYAh+jrnl4ZZ9c1Twq1QhDhDkDwqpBcgXoFQCl2zgZirMaOB+KfSUwpQaalSQZg0JruAfaC6ZPxCdUtUCwO7VkG4N+kG45AJNi+GKJ7RvgTtKuJ8P97LgZy84Z2X5m8N2cGAT/DnMtO0u+p9MXABIdZgmW4B7X8PdLGgPgY4E6M6Eu8ehOwM64qDteWhcDJ9LIEuAilyoq8XosI1Ru/hZceDgY6MUCHBZBn+PwNAF6C8EdRloLsDgF9CXC52JcPUZqHOH5uMwrobUF5jfwzHbOPGrghNWSooFy2juJIP+OpimRC87DIPQVQ45bhDvAe4h/PV47BFRwIyUSKppXQa3X4O+PBipfuCpgt5cuPUKNC+FEgkcFWCPG6zbVLxg83+RH+zf4/fQCXpzYPjb/wJDldCTA7eioWkRnBHmyLAdIMzz7Ydq/ijCA/kHUOxtoHwOZBEAAAAASUVORK5CYII="
                      alt="instagram"
                    />
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="#"
                    target="_blank"
                    className="text-accent-light transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="github.com"
                    target="_blank"
                    className="text-accent-light transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>

                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nL2VuUoDURSGPwVBo6lE1Cq4PIRYqKDgColgaWMZtVI7sTHGtVAfwAfwBSQGsbSxsEhwqcQF3DpRA1GI3HBGJjd3xjtB/OGEMOc//7lzljsQDFVif4YWYAZIA/fAJ5CX/4fANNBciXAYSALvQOEXewMSQIOteDuQtRAuaJYB2mzEnysQL4g9+SUJayd/AG4sRK+1Q2W8ypXUAsfl+RCwD8SBEbG4POsTzqQWu2yaFr2hStgWMUPjS6Zr1vDqc9bysGSIVyP8g7SB0B0gwaAhPuUm3GnOK4LjRdO4dRzVsp1u51EFCbKaRl60iz+qwdvALrAuNQ2CGmBNYpWtiGYxATLHG7LyCSH3B0gQE2Enfgt4dBNShia9AlEL8SlDiZUduEnzLsexVs8TYAEYlQ1VGz8GLAJnPhteMuZNQE4c6kruAU61hkW1kphO7dgH0Ki/6qaLsAfUAr1iatN17PgkUP0oQz1wKYQvuZuGgQGgzsDv8hBXGiGvhnV6XNcRAzficV13eIm7k1xUkOBcvidWCMku5CS41cBRz5yGrvqVxQ9qEiZ8/MpXNi3/im/yLuAgFqOANwAAAABJRU5ErkJggg=="
                      alt="github"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.linkedin.com/company/prinopixel/mycompany/"
                    target="_blank"
                    className="text-accent-light transition hover:opacity-75"
                  >
                    <span className="sr-only">Linkedin</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="26"
                      height="26"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-accent-light">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Company Review
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      Accounts Review
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      HR Consulting
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      SEO Optimisation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-accent-light">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/about"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/carieers"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      Carieers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-accent-light">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="/contact"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Live Chat{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-accent-light">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Accessibility{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Returns Policy{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Refund Policy{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-accent-light transition hover:opacity-75"
                    >
                      {" "}
                      Hiring Statistics{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xs text-accent-light">
            &copy; 2024. PrinoPixel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
