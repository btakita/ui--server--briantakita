import { blog_site, social_a1 } from 'briantakita.me/config.js'
import { url__join } from 'ctx-core/uri'
import type { Graph } from 'schema-dts'
export default async ()=>{
	const { author, website } = blog_site
	const root_Person_id = website
	const root_AboutPage_id = url__join(root_Person_id, '#about')
	const root_ContactPage_id = url__join(root_Person_id, '#contact')
	const about_WebPage_id = url__join(website, 'about')
	const full_stack_engineer_description = 'Develops many interoperable apps + open source libraries that are simple & small in size. Creates flat architectures that scale large & small. These libraries & apps build on each other. Reactive programming with general purpose contexts. Precise & scalable domain ontology. These techniques remove incidental complexity & bloat that come with other programming paradigms.'
	const digital_marketer_description = 'Performs full-featured Digital Marketing Services. Excels at creating engaging websites/apps, technical SEO, & automating systems.'
	return JSON.stringify(<Graph>{
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': root_Person_id,
				url: root_Person_id,
				name: author,
				image: 'https://gravatar.com/avatar/a0599814ceddc2e283792f4e47c57f5e',
				hasOccupation: [
					{
						'@type': 'Role',
						name: 'Sr. Full Stack Engineer',
						description: full_stack_engineer_description,
						qualifications: full_stack_engineer_description,
						mainEntityOfPage: about_WebPage_id
					},
					{
						'@type': 'Role',
						name: 'Digital Marketer',
						description: digital_marketer_description,
						qualifications: digital_marketer_description,
						mainEntityOfPage: about_WebPage_id,
					},
				],
				mainEntityOfPage: [
					about_WebPage_id,
					root_ContactPage_id,
				],
				subjectOf: { '@id': about_WebPage_id },
				sameAs: [
					...social_a1.filter(social=>social.active).map(social=>social.href),
					'https://linktr.ee/briantakita',
					'https://www.youtube.com/channel/UC3gg23rxm1sM43sQWRGKEqQ',
					'https://twitter.com/BrianTakita/',
					'https://www.facebook.com/brian.takita',
					'https://www.crunchbase.com/person/brian-takita',
					'https://angel.co/brian-takita',
					'https://briantakita.tumblr.com/',
					'https://www.pinterest.com/briantakita/',
					'https://www.quora.com/profile/Brian-Takita',
					'https://about.me/brian_takita',
					'https://www.reddit.com/user/briantakita/',
					'https://soundcloud.com/brian-takita',
					'https://www.behance.net/briantakita',
					'https://gravatar.com/btakita',
					'https://disqus.com/by/brian_takita/',
					'https://briantakita.weebly.com/',
					'https://brian-takita.blogspot.com/',
					'https://mix.com/briantakita',
					'https://www.meetup.com/Los-Angeles-Gophers/members/109554982',
					'https://foursquare.com/briant9631966',
					'https://www.diigo.com/profile/briantakita',
					'https://www.slideshare.net/BrianTakita',
					'https://deep-cut.fm/profile/65e7579ec4c0c5001eddebb0',
					'https://www.last.fm/user/briantakita',
					'http://hunch.com/briantakita/profile',
					'https://briantakita.wordpress.com/',
					'https://briantakita.brandyourself.com/',

				],
			},
			{
				'@type': 'AboutPage',
				'@id': root_AboutPage_id,
				name: author + ' Summary',
				inLanguage: 'en-us',
				isPartOf: root_Person_id
			},
			{
				'@type': 'WebPage',
				'@id': about_WebPage_id,
				url: about_WebPage_id,
				name: 'About | ' + author,
				inLanguage: 'en-us',
				isPartOf: [
					root_Person_id,
					root_AboutPage_id,
				],
				about: root_Person_id,
				mainEntity: root_Person_id
			},
			{
				'@type': 'ContactPage',
				'@id': root_ContactPage_id,
				url: root_ContactPage_id,
				name: 'Contact ' + author,
				inLanguage: 'en-us',
				isPartOf: root_Person_id,
				about: root_Person_id,
				mainEntity: root_Person_id
			},
		]
	})
}
