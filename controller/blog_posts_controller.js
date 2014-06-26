/**
 * The Blog Posts Controller class
 *
 * @constructor
 * @extends       alchemy.classes.AppController
 *
 * @author        Jelle De Loecker   <jelle@codedor.be>
 * @since         0.1.0
 * @version       0.1.0
 */
Controller.extend(function BlogPostsController() {

	this.view = function view(render) {

		var conditions = {},
		    params     = render.req.params;

		if (params.slug) {
			conditions['slug.' + params.prefix] = params.slug;
		} else {
			conditions._id = params.id;
		}

		this.getModel('BlogPost').find('first', {publishableDate: true, conditions: conditions}, function(err, item) {
			if (item.length) {
				render.viewVars.article = item[0].BlogPost;
				render();
			} else {
				render('static/404');
			}
			
		});
	};

});
