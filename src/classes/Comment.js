import { useCommentStore } from '../stores/comment';
import User from './User';

class Comment {
    constructor(id, content, createdAt, score, replies) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.score = score;
        this.user = new User;
        this.replies = replies;
    }

    addComment(item, data) {

        const storeData = useCommentStore();

        this.id = data.commentsCount + 1
        this.content = item
        this.createdAt = Date.now()
        this.score = 0
        this.user.username = data.currentUser.username
        this.user.image.png = data.currentUser.image.png
        this.user.image.webp = data.currentUser.image.webp
        this.replies = []

        data.comments.push(this);

        storeData.saveDataToLocalStorage(data);
    }
}

export default Comment;