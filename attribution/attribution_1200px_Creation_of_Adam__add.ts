import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { img_ } from 'relementjs/html'
import { type Node_T } from 'relementjs/isomorphic'
export function attribution_1200px_Creation_of_Adam__add<env_T extends relement_env_T>(
	{ ctx }:{
		ctx:wide_ctx_T
	}
):Node_T<env_T, HTMLElement> {
	return (
		attribution__sup_<env_T>({
				ctx,
				footnote_id: '1200px-Creation_of_Adam.jpg'
			},
			tb_a_({ href: 'http://en.wikipedia.org/wiki/File:Creaci%C3%B3n_de_Ad%C3%A1m.jpg', nofollow: true },
				'Wikipedia')),
			'— Licensed under ',
			tb_a_({ href: 'https://commons.wikimedia.org/wiki/Commons:Licensing', nofollow: true },
				'Creative Commons ',
				img_({
					src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg',
					style: 'height: 1em; margin-right: 0.125em; display: inline;'
				}))
	)
}
