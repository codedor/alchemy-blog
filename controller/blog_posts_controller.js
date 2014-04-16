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

		conditions['slug.' + params.prefix] = params.slug;

		this.getModel('BlogPost').find('first', {conditions: conditions}, function(err, item) {

			pr(item, true);

		});

		pr(render.req.params, true);


	};

});
