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

		this.addBehaviour('sluggable');
		this.addBehaviour('publishable');
		this.addBehaviour('revision');

		this.belongsTo = {
			User: {
				modelName: 'User',
				foreignKey: 'author_id'
			}
		};

		this.hasAndBelongsToMany = {
			Category: {
				modelName: 'BlogCategory',
				foreignKey: 'blog_category_id'
			}
		};

		this.blueprint = {
			name: {
				type: 'String'
			},
			author_id: {
				type: 'ObjectId'
			},
			written_on_date: {
				type: 'Date',
				default: Date.create
			},
			publish_date: {
				type: 'Date',
				default: Date.create
			},
			title: {
				type: 'String',
				translatable: true
			},
			body: {
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
					'name',
					'author_id',
					'written_on_date',
					'publish_date',
					'blog_category_id'
				]
			},
			translations: {
				fields: [
					'title',
					'body',
					'slug'
				]
			}
		};

		this.actionLists = {
			paginate: ['index', 'export'],
			record: [
				'view',
				'edit',
				'remove',
				{
					path: '/blog_preview/:id',
					title: __('chimera', 'View on frontend'),
					icon: 'eye'
				}
			]
		};
	};

});
