import React from "react";
import "./BlogCard.css";
function BlogCard({ icon, title, description, twitter_url, blog_url, tags }) {
    return (
        <div>
            <div className="blogs-list">
                <div className="container">
                    <div className="card">
                        <div className="head">
                            <div className="icon">
                                <span>{icon}</span>
                            </div>
                            <div className="title">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="tags">
                            <p>{tags}</p>
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>

                        <div className="flex-bottom">
                            <div className="social-icons">
                                <div className="twitter">
                                    <a href={twitter_url}>
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="visit-btn">
                                <a
                                    href={blog_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button>Visit Blog</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
