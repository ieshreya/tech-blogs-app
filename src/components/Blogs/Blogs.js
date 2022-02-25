import React from "react";
import { useState, useEffect } from "react";
import "./Blogs.css";
import BlogCard from "../BlogCard/BlogCard";
const Blogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        fetch(
            `https://functions-tech-blogs-shreya.harperdbcloud.com/api/blogs/${tags}`
        )
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                // console.log(data);
                setIsLoading(false);
            });
    }, [tags]);
    const allTags = ["HTML", "CSS", "JavaScript", "React"];
    function chooseTag(tag) {
        setTags(tag);
    }

    return (
        <div>
            {isLoading ? (
                <h2 className="loading_el">Loading.. ⌛</h2>
            ) : (
                <div>
                    <div className="nav_tags">
                        {allTags.map((tag) => {
                            return (
                                <div
                                    className="tags_el"
                                    onClick={() => chooseTag(tag)}
                                >
                                    <p>{tag}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {blogs.map((blog) => {
                            return (
                                <div>
                                    <BlogCard
                                        key={blog.id}
                                        title={blog.title}
                                        description={blog.description}
                                        icon={blog.icon}
                                        twitter_url={blog.twitter_url}
                                        blog_url={blog.blog_url}
                                        tags={blog.tags}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
