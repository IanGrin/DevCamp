var guide = {
    title: 'Guide to programming',
    content: 'content will go here',
    visibleToUser: function (viewingUserRole) {
        if (viewingUserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + ' - ' + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
}

user = { role: 'free' };
guide.renderContent(user.role);