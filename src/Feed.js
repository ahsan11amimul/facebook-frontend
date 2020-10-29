import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic='https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/94888770_1306586072879079_349007333075976192_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=HNTfuQt4P_0AX8rnr3U&_nc_ht=scontent.fspd1-1.fna&oh=c220d15f41434eb41d62e18b96e1987c&oe=5FA19432'
                username='AnikaAhsan' message='I love you more than i express' timestamp='2020-11-11' image='https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=' />
            <Post profilePic='https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/94888770_1306586072879079_349007333075976192_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=HNTfuQt4P_0AX8rnr3U&_nc_ht=scontent.fspd1-1.fna&oh=c220d15f41434eb41d62e18b96e1987c&oe=5FA19432'
                username='AnikaAhsan' message='I love you more than i express' timestamp='2020-11-11' image='https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=' />
            <Post profilePic='https://scontent.fspd1-1.fna.fbcdn.net/v/t1.0-9/94888770_1306586072879079_349007333075976192_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=HNTfuQt4P_0AX8rnr3U&_nc_ht=scontent.fspd1-1.fna&oh=c220d15f41434eb41d62e18b96e1987c&oe=5FA19432'
                username='AnikaAhsan' message='I love you more than i express' timestamp='2020-11-11' image='https://media.istockphoto.com/photos/in-love-with-the-landscape-picture-id892010070?k=6&m=892010070&s=612x612&w=0&h=LE0vwwLhyLGUpQiP0OYXIYNtNWS5Ezna07YYyQ3WPe0=' />
        </div>

    )
}

export default Feed
