import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item'
const PreviewCollection=({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>
{title.toUpperCase()}
        </h1>
        <div className='preview'>
        {
items.filter((item,id)=>id<4).
map(({id,...otherItems})=>(
    <CollectionItem key={id} {...otherItems}/>
))

        }
        </div>
    </div>
)
export default PreviewCollection