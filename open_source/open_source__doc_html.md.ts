import { WebPage__description__set, WebPage__name__set } from '@rappstack/domain--server/jsonld'
import { site__title_ } from '@rappstack/domain--server/site'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { md__raw_ } from '@rappstack/ui--any/md'
import { footnote__sup_ } from '@rappstack/ui--server--blog/footnote'
import { schema_org_WebPage_id__link_ } from '@rappstack/ui--server/rdfa'
import { type request_ctx_T } from 'relysjs/server'
import { apache2_license__tb_a_ } from '../anchor/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
import {
	backbone_signal_md_,
	ctx_core_md_,
	desertrb_md_,
	generic_query_analyzer_md_,
	hyop_md_,
	jasmine_flow_md_,
	jellyrb_md_,
	nanostores_md_,
	poloniumrb_md_,
	poof_md_,
	rappstack_md_,
	rebuildjs_md_,
	rebuildjs_tailwind_md_,
	relementjs_md_,
	relysjs_md_,
	rmemo_md_,
	rr_md_,
	rspec_md_,
	screw_unit_md_,
	sveltejs_md_,
	unison_md_
} from './config.js'
export function open_source__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	const title = 'Open Source | ' + site__title_(ctx)
	const description = 'Brian Takita\'s open source work.'
	WebPage__name__set(ctx, title)
	WebPage__description__set(ctx, description)
	return (
		md_layout__doc_html_({
			ctx,
			title,
			description,
			h1_text: 'Open Source',
			active_link: 'open-source',
		}, [
			schema_org_WebPage_id__link_(ctx),
			// @formatter:off
			// language=md
			md__raw_(`
I work on open source projects, licensed with the ${apache2_license__tb_a_()}. I have primarily focused on developing libraries to assist in my project work. I will be focusing on more open source components & apps. Here are some notable projects:

${rappstack_md_()}

${rmemo_md_()}

${relementjs_md_()}

${rebuildjs_md_()}

${relysjs_md_()}

${rebuildjs_tailwind_md_()}

${hyop_md_()}

${ctx_core_md_(ctx_core_catch_all__footnote__sup_)}

${nanostores_md_(nanostores_breadth_first_queue__footnote__sup_)}

${sveltejs_md_(svelte_cyclic_breadth_first_queue__footnote__sup_)}

${backbone_signal_md_()}

${jasmine_flow_md_()}

${rr_md_()}

${rspec_md_(rspec_nested_describes__footnote__sup_)}

${desertrb_md_()}

${jellyrb_md_()}

${poloniumrb_md_()}

${unison_md_()}

${screw_unit_md_()}

${generic_query_analyzer_md_()}

${poof_md_()}
			`.trim())
			// @formatter:on
		])
	)
	function ctx_core_catch_all__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'ctx_core_catch_all'
			}, [
				`ctx-core has been a bit of a catch-all utility library. To share code between projects under the principles of ctx-core. I use ctx-core to handle transitions between technological developments in the web space.`
			])
		)
	}
	function nanostores_breadth_first_queue__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'nanostores_breadth_first_queue'
			}, [
				tb_a_({ href: 'https://github.com/nanostores/nanostores/commit/af5ba274b2b400e5b0845b9a187660006faf550f', nofollow: true },
					'Nano Stores breadth first queue')
			])
		)
	}
	function svelte_cyclic_breadth_first_queue__footnote__sup_() {
		return (
			footnote__sup_({ ctx, id: 'svelte_cyclic_breadth_first_queue' }, [
				tb_a_({ href: 'https://github.com/sveltejs/svelte/commit/4d8090aa158bc369fc679baccb29d7e843bd5ce6', nofollow: true },
					'Svelte Cyclic breadth first queue')
			])
		)
	}
	function rspec_nested_describes__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'rspec_nested_describes'
			}, [
				`Rspec: Added Nested Describes: Implemented in `,
				tb_a_({
					href: 'https://github.com/dchelimsky/rspec/commit/ee2043d08fdea9a1b694fd8d3bf019b85d17ef29',
					nofollow: true
				}, `two`),
				` `,
				tb_a_({
					href: 'https://github.com/dchelimsky/rspec/commit/ee2043d08fdea9a1b694fd8d3bf019b85d17ef29',
					nofollow: true
				}, `commits`),
				`.`
			])
		)
	}
}
