import { jsonld_Graph_ } from '@rappstack/domain--server/jsonld'
import { request_url__href_, request_url__origin_ } from '@rappstack/domain--server/request'
import {
	font__meta_props_a1_,
	type icon_link_props_T,
	site__author_,
	site__body_class_,
	site__description_,
	site__favicon_,
	site__google_site_verification_,
	site__gtag_id_,
	site__light_and_dark_mode_,
	site__social_image_url_,
	site__title_
} from '@rappstack/domain--server/site'
import { fouc__remove__fragment_ } from '@rappstack/ui--server/fouc'
import { jsonld__script_ } from '@rappstack/ui--server/jsonld'
import { og__meta_fragment_ } from '@rappstack/ui--server/og'
import { twitter__meta_fragment_ } from '@rappstack/ui--server/twitter'
import { dark_theme_color_fill, light_theme_color_fill } from 'briantakita.me/config/index.js'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { body_, head_, link_, meta_, script_, style_, title_ } from 'relementjs/html'
import { doc_html_ } from 'relementjs/server'
import { assets_, assets__new, type assets_T, type request_ctx_T } from 'relysjs/server'
type layout__doc_html_props_T = {
	ctx:request_ctx_T
	assets?:assets_T
	canonical_url?:string
	title?:string
	author?:string
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
		author,
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
	title ??= site__title_(ctx) ?? site__author_(ctx) ?? canonical_url ?? ''
	description ??= site__description_(ctx)
	author ??= site__author_(ctx)
	favicon ??= site__favicon_(ctx)
	social_image_url = new URL(social_image_url ?? site__social_image_url_(ctx), request_url__origin_(ctx)).href
	const google_site_verification = site__google_site_verification_(ctx)
	const site__light_and_dark_mode = site__light_and_dark_mode_(ctx)
	assets = assets__new(assets_(ctx), assets)
	const site__gtag_id = site__gtag_id_(ctx)
	theme_color ??= 'rgb(' + dark_theme_color_fill + ')'
	return (
		doc_html_({
			lang: 'en',
			class: class_('fouc-ctx'),
			/** @see {import('@btakita/ui--browser--briantakita/layout').fouc_ctx__hyop} */
			hyop: 'fouc_ctx__hyop'
		}, [
			head_([
				site__light_and_dark_mode
					? fouc__remove__fragment_({
						dark_bg_color: dark_theme_color_fill,
						light_bg_color: light_theme_color_fill
					})
					: null,
				meta_({ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }),
				meta_({ name: 'viewport', content: 'width=device-width' }),
				meta_({ name: 'title', content: title }),
				meta_({ name: 'description', content: description }),
				meta_({ name: 'author', content: author }),
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
				site__light_and_dark_mode
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
				style_({ type: 'text/css' }, raw_(
					`html.fouc-ctx .fouc{opacity:0;}:root,html[data-theme="light"] {--color-fill: ${light_theme_color_fill};--color-text-base: 40,39,40;--color-accent: 0,108,172;--color-card: 230,230,230;--color-card-muted: 205,205,205;--color-border: 236,233,233;}html[data-theme="dark"] {--color-fill: ${dark_theme_color_fill};--color-text-base: 234,237,243;--color-accent: 255,107,1;--color-card: 52,63,96;--color-card-muted: 138,51,2;--color-border: 171,75,8;}`)),
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
