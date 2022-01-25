import React from 'react';
import {Post} from "../models";
import moment from 'moment'

interface CardProps {
    post?: Post;
}

const Card = (cardProps: CardProps) => {
    const { post  } = cardProps

    return <div className="bg-gray-100 mt-2">
                <div className="p-1 md:flex">
                    <img className="w-5 h-5 rounded-full"
                         src={post?.authors?.avatar_url} alt=""/>
                    <p className="pl-1">{post?.authors?.name} posted on {moment(post?.created_at).format("dddd, MMMM Do YYYY,HH:mm")}</p>
                </div>
                <hr />
                <div className="md:flex p-8 md:p-3">
                    <img className="w-32 h-32 md:w-48 md:h-auto "
                         src={post?.image_url} alt="" width="384" height="512" />
                    <div className="pl-2 space-y-2">
                        <div className="font-medium">
                            <div className="text-xl font-bold">
                                {post?.title}
                            </div>
                        </div>
                        <blockquote>
                            <p className="text-sm">
                                {post?.body}
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
}

export default Card;
