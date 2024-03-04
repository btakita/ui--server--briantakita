import { blog_site, social_a1 } from 'briantakita.me/config.js'
import { url__join } from 'ctx-core/uri'
import type { Graph } from 'schema-dts'
export default async ()=>{
	const { author, website } = blog_site
	const root_Person_id = website
	const root_AboutPage_id = url__join(root_Person_id, '#about')
	const root_ContactPage_id = url__join(root_Person_id, '#contact')
	const about_WebPage_id = url__join(website, 'about')
	const occupation_description = 'Develops many interoperable apps + open source libraries that are simple & small in size. Creates flat architectures that scale large & small. These libraries & apps build on each other. Reactive programming with general purpose contexts. Precise & scalable domain ontology. These techniques remove incidental complexity & bloat that come with other programming paradigms.'
	return JSON.stringify(<Graph>{
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': root_Person_id,
				url: root_Person_id,
				name: author,
				hasOccupation: {
					'@type': 'Occupation',
					name: 'Full Stack Developer',
					description: occupation_description,
					qualifications: occupation_description,
					mainEntityOfPage: root_Person_id,
					estimatedSalary: 'N/A',
					occupationLocation: 'online'
				},
				mainEntityOfPage: [
					about_WebPage_id,
					root_ContactPage_id,
				],
				subjectOf: { '@id': about_WebPage_id },
				sameAs: social_a1.filter(social=>social.active).map(social=>social.href),
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
