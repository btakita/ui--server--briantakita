import { tb_a_ } from '@rappstack/ui--any/anchor'
import { md__raw_ } from '@rappstack/ui--any/md'
import { footnote__sup_, footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { a_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import {
	ado_net__tb_a_,
	apache2_license__tb_a_,
	astrojs__tb_a_,
	backbone_signal__tb_a_,
	backbonejs__tb_a_,
	bunjs__tb_a_,
	c_sharp__tb_a_,
	ccrcorp__tb_a_,
	ctx_core__tb_a_,
	desertrb__tb_a_,
	drizzle_orm__tb_a_,
	elysiajs__tb_a_,
	generic_query_analyzer__tb_a_,
	honk__tb_a_,
	hyop__tb_a_,
	jasmine_flow__tb_a_,
	jasminejs__tb_a_,
	jellyrb__tb_a_,
	jquery__tb_a_,
	msaccess__tb_a_,
	msexcel__tb_a_,
	naming_convention__tb_a_,
	nanostores__tb_a_,
	pivotal_labs__tb_a_,
	poloniumrb__tb_a_,
	poof__tb_a_,
	rappstack__tb_a_,
	rebuildjs__tb_a_,
	rebuildjs_tailwind__tb_a_,
	relementjs__tb_a_,
	relysjs__tb_a_,
	rmemo__tb_a_,
	rr__tb_a_,
	rspec__tb_a_,
	ruby_on_rails__tb_a_,
	rundavoo__tb_a_,
	screw_unit__tb_a_,
	smarty__tb_a_,
	solidjs__tb_a_,
	sqlite__tb_a_,
	svelte_stores__tb_a_,
	sveltejs__tb_a_,
	tailwindcss__tb_a_,
	unison__tb_a_,
	winforms__tb_a_
} from '../anchor/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
export function open_source__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		md_layout__doc_html_({
			ctx,
			title: 'Open Source',
			active_link: 'open-source',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
I work on open source projects, licensed with the ${apache2_license__tb_a_()}. I have primarily focused on developing libraries to assist in my project work. I will be focusing on more open source components & apps. Here are some notable projects:

## ${rappstack__tb_a_({ id: 'rappstack' })}

rappstack (reactive app stack) is an opinionated stack that emphasizes:

* reactive programming
* general purpose contexts
* tiny browser bundles
* performance

The tech stack includes:

${[
	bunjs__tb_a_(),
	elysiajs__tb_a_(),
	sqlite__tb_a_(),
	drizzle_orm__tb_a_(),
	tailwindcss__tb_a_(),
	ctx_core__tb_a_(),
	rmemo__tb_a_(),
	relementjs__tb_a_(),
	relysjs__tb_a_(),
	hyop__tb_a_(),
].join(' ')}

## ${rmemo__tb_a_({ id: 'rmemo' })}

rmemo is a tiny no-fluff reactive state management library. The primitive is a reactive memo. A reactive signal is a reactive memo that has a public setter property. rmemo includes memosig, lock_memosig, & a rich api for your reactive state management needs. Features include:

* \`memo_\`
* \`signal_\`
* \`memosig_\`
* \`lock_memosig_\`
* general purpose contexts with [\`ctx-core/be\`](https://github.com/ctx-core/be)
* autosubscriptions
* async support
* a terse & focused api
* performance
* reactive state management library with the smallest full featured bundle size
* integration with garbage collector via WeakRef

## ${relementjs__tb_a_({ id: 'relementjs' })}

Isomorphic ui rendering & state management on the browser & server. The smallest reactive UI library on the browser & server. relementjs scales large & small with tree-shakable modules for rendering, reactivity, contexts, & hydration.

## ${rebuildjs__tb_a_({ id: 'rebuildjs' })}

Simple hackable alternative to vite for Multi-Page Apps.

This library provides esbuild functions for dev & production environments. It forms a core for an app server stack.

## ${relysjs__tb_a_({ id: 'relysjs' })}

Reactive web app server. Focuses on MPAs with simple server middleware &amp; browser build api. Uses a rebuildjs core with Bunjs, Elysia, ESBuild, rmemo, & ctx-core

## ${rebuildjs_tailwind__tb_a_({ id: 'rebuildjs_tailwind' })}

Tailwindcss plugin for rebuildjs

## ${hyop__tb_a_({ id: 'hyop' })}

Hypermedia Operation or Hydration Operation. Tiny library (starting at 61 B) to hydrate operations in the hyop attribute. Remove bloat from hydration & JS payloads. Use standalone or with other Hypermedia libraries like HTMX...Hydration as Hypermedia.

## ${ctx_core__tb_a_({ id: 'ctx-core' })}

Over 100 general purpose libraries to assist work creating libraries & apps. Development on ctx-core began in 2016 & continues today ${ctx_core_catch_all__footnote__sup_()}.

### Motivation

After maintaining several applications, I ran into the issues of:

* creating & iterating on features
* extracting code to reuse
* time to refactor code
* time to upgrade software
* gluing together small libraries & snippets
* composing app feature libraries

Existing solutions such as frameworks or libraries bring speed to get started. They come with the maintenance burden of:

* large payload size & memory usage
* extending the underlying software to fulfill requirements
* time to upgrade the application with the underlying libraries
* domain language mismatch between the library/framework

There are usually small libraries & code snippets. Gluing these small libraries & snippets together. With a ${naming_convention__tb_a_('naming convention')} that utilizes unique, immutable, & composable names. Results in a codebase when you could find all usages of an entity or concept by doing a project-wide search. Rename refactorings are more accurate & comprehensive due to the uniqueness of names. Composable naming allows one to understand the context & full description of the entity.

I use ctx-core to maintain software with:

* an accessible domain model
* a flat architecture
* reactive programming

### Usage

ctx-core uses dependency-injection of a \`ctx\` & "beings". A "being" is a function created with the \`be_\` factory function. The flat architecture reduces incidental complexity. To manage complex domains, nested architecture provides scoping. I created the [Tag Vector](/posts/tag-vector-0-introduction) Convention while working on ctx-core. Tag Vector encodes tags  joined by vectors. Tag Vector express data structure shapes & complex domains within a flat architecture.

I use ctx-core along with ${rmemo__tb_a_()} to manage reactive state on the server & the browser. In my work, I favor ${rmemo__tb_a_()} to render components on the server & browser. ctx-core also supports reactive state with ${nanostores__tb_a_()}, ${solidjs__tb_a_()} signals, & ${svelte_stores__tb_a_()}.

## ${nanostores__tb_a_({ id: 'nanostores' })}

II learned about Nano Stores via ${astrojs__tb_a_()}. NanoStores was a natural replacement of I ${svelte_stores__tb_a_()} to support global reactive state. NanoStores is agnostic to component libraries, such as ${solidjs__tb_a_()}. I contributed a fix${nanostores_breadth_first_queue__footnote__sup_()} to diamond dependency bugs. This fix uses a breadth first queuing algorithm.

## ${sveltejs__tb_a_({ id: 'sveltejs' })}

I also contributed the breadth first queuing algorithm to svelte stores${svelte_cyclic_breadth_first_queue__footnote__sup_()}. I added async support to \`computed\`${nanostores_computed_async__footnote__sup_()}.

## ${backbone_signal__tb_a_({ id: 'backbone_signal' })}

I started using global state management with ${backbonejs__tb_a_()} while Lead Developer at ${honk__tb_a_()}. I created  ${a_({ href: '/posts/backbone-signal-practical-reactive-programming-javascript' }, `backbone-signal`)} to add global state management to Backbone.js. I used this across different projects including ${rundavoo__tb_a_()}.

## ${jasmine_flow__tb_a_({ id: 'jasmine_flow' })}

At ${rundavoo__tb_a_()}, I created ${a_({ href: '/posts/jasmine-flow-fast-and-thourough-testing' }, `jasmine-flow`)}. Jasmine-flow facilitates linear flow testing...saving effort in maintaining automated tests. This was hard-learned from maintaining various large apps while at ${honk__tb_a_()} & ${pivotal_labs__tb_a_()}.

## ${rr__tb_a_({ id: 'rr' })}

RR (double Ruby) is a test double library for the Ruby language. I ${a_({ href: '/posts/introducing-rr' }, `released RR`)} back in 2008. RR features a terse api to for a high signal to syntax noise ratio. Which allows a read & write friendly automated testing. I used global state management to manage complex data interactions. I stopped development when I moved to full-stack Javascript development. ${tb_a_({ href: 'https://github.com/kou', nofollow: true }, `Sutou Kouhei`)} began maintaining this project in 2015.

## ${rspec__tb_a_({ id: 'rspec' })}

I was an early core maintainer on the rspec team. Rspec was the first DSL (Domain Specific Language) implementation of ${tb_a_({ href: 'https://dannorth.net/introducing-bdd/', nofollow: true }, 'BDD (Behavioral Driven Development)')}. Key contributions include the first known implementation of nested \`describe\` & \`context\` statements${rspec_nested_describes__footnote__sup_()}. Nested describes were controversial at that time. Criticism included adding to the complexity & inhibit readability of the specs. Nesting \`describe\` & \`context\` enabled contextual nesting with separate usage of \`beforeEach\` & \`afterEach\`. I championed the idea & delivered the implementation. I integrated Rspec with ${tb_a_({ href: 'https://ruby-doc.org/stdlib-3.0.0/libdoc/test-unit/rdoc/Test/Unit.html', nofollow: true }, `Test::Unit`)}. Worked on the initial mock implementation. Worked on the ${ruby_on_rails__tb_a_()} integration.

## ${desertrb__tb_a_({ id: 'desert' })}

Desert is a Rails plugin framework. Desert allowed plugins to share models, views, controllers, helpers, routes, and migrations. Applications used these plugins.

Reusability doesn’t come at the cost of extensibility. Desert made it easy to extend the functionality of a plugin - both in your application and in other plugins.

Mixin classes in with your own or other plugins’ classes. This allows you to make full featured composable components.

## ${jellyrb__tb_a_({ id: 'jellyrb' })}

Jelly is an unobtrusive Javascript framework for ${jquery__tb_a_()} and ${ruby_on_rails__tb_a_()}. Jelly provides a set of conventions and tools to organize your AJAX and client-side code. While keeping Javascript out of your views and markup. Jelly is the glue between your Rails controllers and jQuery events.

Jelly encourages and enables unit testing your Javascript code. While using a Javascript testing framework such as ${jasminejs__tb_a_()} or ${screw_unit__tb_a_()}. Jelly allows testing AJAX and client-side events separate from your Rails app.

## ${poloniumrb__tb_a_({ id: 'poloniumrb' })}

Selenium test runner & helpers for Rails. Featured a set of \`wait_for\` helpers to keep the tests in sync with the application.

## ${unison__tb_a_({ id: 'unison' })}

Reactive in-memory relational caching library which syncs with upstream relational databases. Written in Ruby.

## ${screw_unit__tb_a_({ id: 'screw-unit' })}

Screw.Unit is a Behavior-Driven Testing Framework for Javascript. It features nested describes. Its goals are to provide:

* a DSL for elegant, readable, organized specs;
* an interactive runner that can execute focused specs and describes;
* and brief, extensible source-code.

## ${generic_query_analyzer__tb_a_({ id: 'generic_query_analyzer' })}

A query analyzer using ${ado_net__tb_a_()}. I built this tool to run SQL queries on the ${msaccess__tb_a_()} CRM ${msexcel__tb_a_()} database. Used by @ ${ccrcorp__tb_a_()}. Written with ${c_sharp__tb_a_()}, ${ado_net__tb_a_()}, ${winforms__tb_a_()}.

## ${poof__tb_a_({ id: 'poof' })}

The PHP Object Oriented Framework is a framework library to build components in PHP. POOF was an alternative to using the ${smarty__tb_a_()}. Poof encapsulated html rendering in components.

${footnote_list__div_({ ctx })}
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
	function nanostores_computed_async__footnote__sup_() {
		return (
			footnote__sup_({ ctx, id: 'nanostores_computed_async' }, [
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
