import React, { useState } from "react"
import { useEffect } from "react"
import css from './Content.module.css'


const Content = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(listItems => {
            setItems(listItems.entries)
        })
    },[])


    return(
        <ul className={css.listItem}>
            {items.map((item)=>{
                return <li className={css.itemContainer}>
                            <div className={css.item}>
                                <h2 className={css.textDescription} title={item.Description}>{item.Description}</h2>
                                <p className={css.linkItem}>link: <a href={item.Link} target="_blank">Click</a></p>
                                <p>Category: {item.Category}</p>
                            </div>
                        </li>
            })}
        </ul>
    )
}

export default Content