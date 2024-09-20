import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/cc++.jpg" width={200} />
                        <div>
                            <h5>
                                CS2234 C & C++
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Base level programmer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/java.jpg" width={200} />
                        <div>
                            <h5>
                                CS3234 Java
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intro to Objected Oriented Design
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/python.jpg" width={200} />
                        <div>
                            <h5>
                                CS4234 Python
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Fundamentals of Programming
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> 
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/ood.jpg" width={200} />
                        <div>
                            <h5>
                                CS5234 Object Oriented Design
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Advanced OOD
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/algorithm.jpg" width={200} />
                        <div>
                            <h5>
                                CS6234 Algorithms
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intro to Algorithmic Thinking
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="/images/ml.jpg" width={200} />
                        <div>
                            <h5>
                                CS7234 Machine Learning
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intro to Machine Learning
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}