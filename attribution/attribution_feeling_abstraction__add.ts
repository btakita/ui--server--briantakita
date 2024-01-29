import { type root_ctx_T } from '@btakita/domain--any--blog'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { attribution__add } from '@btakita/ui--server--blog/attribution'
import { type relement_env_T } from 'relementjs'
export function attribution_feeling_abstraction__add<env_T extends relement_env_T>(
	{ ctx }:{ ctx:root_ctx_T }
) {
	return (
		attribution__add<env_T>({
			ctx,
			attribution_id: '/assets/images/feeling-abstraction.jpg'
		}, [
			'Originally from ',
			atb_({
				href: 'http://haiphonghoaphuongdo.blogspot.com/2011/07/colorful-vector-abstraction.html'
			}, 'Original article'),
			'—',
			atb_({
				href: 'http://2.bp.blogspot.com/-_t6mHvuNOTs/Th23RDI-RgI/AAAAAAAAAL0/T_VMdr6wIcY/s1600/abstract-vector-free-art.jpg'
			}, 'Source Image'),
			'—',
			atb_({
				href: 'https://2-bp.blogspot.com/2018/09/best-free-stock-photos.html'
			}, 'Licensed under Creative Commons CC0')
		])
	)
}
