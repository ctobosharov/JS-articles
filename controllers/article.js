import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modified.js';

export default {
    get: {
        loadCreate(context) {
            extend(context).then(function() {
                this.partial('../views/article/create.hbs')
            })
        },
        create(context) {
            

            models.article.getAll().then((response) => {
                const articles = response.docs.map((d) => {
                    return { ...d.data(), id: d.id }
                });
                context.articles = articles;

                extend(context).then(function() {
                    this.partial('../views/article/create.hbs')
                })
            })
        }
        
    },
    post: {
        create(context) {
            //const data = { ...context.params, title, category, content };

            models.article.create(context.params).then((response) => {
                context.redirect('#/home')
            }).catch((e) => console.error(e));
        }
    }
    //del: {
    //    close(context) {
    //        const { articleId } = context.params;
//
    //        models.article.close(articleId).then((response) => {
    //            context.redirect('#/home');
    //        })
    //    }
    //}
};