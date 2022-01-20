function likeProduct(userId, product) {
    let likes = product.likes;
    for (let i = 0; i < likes.length; i++) {
        if (likes[i] == userId) {
            likes[i] = null;
        }
    }
    return likes.push(userId);
}