import { tb_a_ } from '@rappstack/ui--any/anchor'
import { attribution__sup_ } from '@rappstack/ui--server--blog/attribution'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
export function attribution_feeling_abstraction__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:wide_ctx_T }
) {
	return (
		attribution__sup_<env_T>({
			ctx,
			footnote_id: 'feeling-abstraction.jpg'
		}, [
			'Originally from ',
			tb_a_({
				href: 'http://haiphonghoaphuongdo.blogspot.com/2011/07/colorful-vector-abstraction.html'
			}, 'Original article'),
			'—',
			tb_a_({
				href: 'http://2.bp.blogspot.com/-_t6mHvuNOTs/Th23RDI-RgI/AAAAAAAAAL0/T_VMdr6wIcY/s1600/abstract-vector-free-art.jpg'
			}, 'Source Image'),
			'—',
			tb_a_({
				href: 'https://2-bp.blogspot.com/2018/09/best-free-stock-photos.html'
			}, 'Licensed under Creative Commons CC0')
		])
	)
}
