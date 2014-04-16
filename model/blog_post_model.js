/**
 * Blog Post model
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@codedor.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Model.extend(function BlogPostModel() {

	this.preInit = function preInit() {

		this.parent();

		this.addBehaviour('sluggable', {test: 1});

		this.blueprint = {
			publish_date: {
				type: 'Date'
			},
			title: {
				type: 'String',
				translatable: true
			},
			body: {
				type: 'Text',
				translatable: true
			}
		};

		this.modelEdit = {
			general: {
				title: __('chimera', 'General'),
				fields: [
					'publish_date'
				]
			},
			translations: {
				fields: [
					'title',
					'body'
				]
			}
		};
	};

});
