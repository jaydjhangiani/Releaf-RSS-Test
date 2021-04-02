import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import '../styles/blog.css'

const Blog = () => {
    const xml = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffreshoffthefield.wixsite.com%2Ffotf%2Fblog-feed.xml"
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        fetch(xml)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.items)
                // console.log(blogs)
            })
    },[xml])
    const num = 3;
    return (
        <div className = "blog">
            { blogs === null ? (
                <h1>Loading</h1>
            ) : (
                <div>
                <h1 className="title">{blogs[`${num}`].title}</h1>
                {parse((blogs[`${num}`].content).replace(new RegExp('\r?\n','g'),'<br/>'))}
                </div>
            )}
            
            {/* {toText(blogs[0].content)} */}
        </div>
    )
}

export default Blog
