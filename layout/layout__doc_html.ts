import { jsonld_Graph_ } from '@rappstack/domain--server/jsonld'
import { request_url__href_, request_url__origin_ } from '@rappstack/domain--server/request'
import {
	type author_T,
	font__meta_props_a1_,
	type icon_link_props_T,
	site__author_a1_,
	site__body_class_,
	site__color_scheme_vars_,
	site__description_,
	site__favicon_,
	site__google_site_verification_,
	site__gtag_id_,
	site__social_image_url_,
	site__title_
} from '@rappstack/domain--server/site'
import { site__color_scheme_vars__style_ } from '@rappstack/ui--server/css'
import { nofouc__body__script_, nofouc__theme__set__fragment_ } from '@rappstack/ui--server/fouc'
import { jsonld__script_ } from '@rappstack/ui--server/jsonld'
import { og__meta_fragment_ } from '@rappstack/ui--server/og'
import { twitter__meta_fragment_ } from '@rappstack/ui--server/twitter'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { body_, head_, link_, meta_, script_, title_ } from 'relementjs/html'
import { doc_html_ } from 'relementjs/server'
import { assets_, assets__new, type assets_T, type request_ctx_T } from 'relysjs/server'
type layout__doc_html_props_T = {
	ctx:request_ctx_T
	assets?:assets_T
	canonical_url?:string
	title?:string
	author_a1?:[author_T, ...author_T[]]
	description?:string
	og__meta_fragment?:tag_dom_T,
	twitter__meta_fragment?:tag_dom_T,
	favicon?:icon_link_props_T
	social_image_url?:string
	theme_color?:string
	sitemap_url?:string
	body_class?:string
}
export function layout__doc_html_($p:layout__doc_html_props_T, ...children:tag_dom_T[]) {
	let {
		ctx,
		assets,
		canonical_url,
		title,
		author_a1,
		description,
		og__meta_fragment,
		twitter__meta_fragment,
		favicon,
		social_image_url,
		theme_color,
		sitemap_url,
		body_class,
	} = $p
	canonical_url ??= request_url__href_(ctx)
	title ??= site__title_(ctx) ?? site__author_a1_(ctx)![0].name ?? canonical_url ?? ''
	description ??= site__description_(ctx)
	author_a1 ??= site__author_a1_(ctx)!
	favicon ??= site__favicon_(ctx)
	social_image_url = new URL(social_image_url ?? site__social_image_url_(ctx), request_url__origin_(ctx)).href
	const google_site_verification = site__google_site_verification_(ctx)
	const site__color_scheme_vars = site__color_scheme_vars_(ctx)
	assets = assets__new(assets_(ctx), assets)
	const site__gtag_id = site__gtag_id_(ctx)
	theme_color ??= 'rgb(' + site__color_scheme_vars!.dark['--color-fill'] + ')'
	return (
		doc_html_({
			lang: 'en',
			class: class_('nofouc'),
			/** @see {import('@btakita/ui--browser--briantakita/layout').nofouc__hyop} */
			hyop: 'nofouc__hyop'
		}, [
			head_([
				site__color_scheme_vars
					? nofouc__theme__set__fragment_({
						dark_bg_color: site__color_scheme_vars.dark['--color-fill'],
						light_bg_color: site__color_scheme_vars.light['--color-fill'],
					})
					: null,
				meta_({ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }),
				meta_({ name: 'viewport', content: 'width=device-width' }),
				meta_({ name: 'title', content: title }),
				meta_({ name: 'description', content: description }),
				meta_({ name: 'author', content: author_a1[0].name }),
				//  Open Graph / Facebook
				og__meta_fragment
					? og__meta_fragment
					: [
						og__meta_fragment_({
							title,
							description,
							url: canonical_url,
							image: social_image_url,
							type: 'website'
						}),
					],
				// Twitter
				twitter__meta_fragment
					? twitter__meta_fragment
					: [
						twitter__meta_fragment_({
							card: 'summary_large_image',
							title,
							description,
							image: social_image_url
						})
					],
				site__color_scheme_vars
					? [
						meta_({ name: 'darkreader-lock' }),
						meta_({ name: 'darkreader', content: 'disable' }),
					]
					: null,
				font__meta_props_a1_(ctx).map(meta_props=>
					meta_(meta_props)),
				meta_({ name: 'theme-color', content: theme_color }),
				link_({ rel: 'icon', ...favicon }),
				link_({ rel: 'canonical', href: canonical_url }),
				link_({ rel: 'sitemap', href: sitemap_url ?? '/sitemap.xml' }),
				title_(title),
				google_site_verification
				&& meta_({ name: 'google-site-verification', content: google_site_verification }),
				site__color_scheme_vars__style_({ ctx }),
				...assets.css_a.map(href=>
					link_({
						rel: 'stylesheet',
						type: 'text/css',
						href,
					})),
			]),
			body_({
				class: class_(
					site__body_class_(ctx),
					'flex',
					'min-h-[100svh]',
					'flex-col',
					'bg-skin-fill',
					'font-sans',
					'text-skin-base',
					'selection:bg-skin-accent',
					'selection:bg-opacity-70',
					'selection:text-skin-inverted',
					body_class),
			}, [
				nofouc__body__script_(),
				children,
				...assets.script_a.map(src=>
					script_({ type: 'module', src })),
				site__gtag_id
					? [
						// Google tag (gtag.js)
						// language=html
						raw_(`
<script>
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', '${site__gtag_id}')
  window.addEventListener('load', ()=>{
		setTimeout(()=>{
			let script = document.createElement('script')
			script.src = 'https://www.googletagmanager.com/gtag/js?id=${site__gtag_id}'
			script.async = true
			script.defer = true
			document.head.appendChild(script)
		}, 1500)
  })
</script>
				`.trim())
					]
					: null,
				jsonld__script_(jsonld_Graph_(ctx)),
			])
		])
	)
}
