/**
 * Blog Category model
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@codedor.be>
 * @since    0.1.0
 * @version  0.1.0
 */
Model.extend(function BlogCategoryModel() {

	this.preInit = function preInit() {

		this.parent();

		this.addBehaviour('sluggable');

		this.blueprint = {
			name: {
				type: 'String'
			},
			title: {
				type: 'String',
				translatable: true
			},
			description: {
				type: 'Text',
				translatable: true
			},
			slug: {
				type: 'String',
				translatable: true
			}
		};

		this.modelEdit = {
			general: {
				title: __('chimera', 'General'),
				fields: [
					'name'
				]
			},
			translations: {
				fields: [
					'title',
					'description',
					'slug'
				]
			}
		};
	};

});
