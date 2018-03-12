import R from "ramda"

const Handlers = {
	changer(e, type) {
		switch (type) {
		case "input":
			return e.target.value
		case "select":
			return null
		case "switch":
			return null
			
		default:
			break
		}
	},
	toggle(v) {
		return !v
	},
	updater() {},
	middleWare() {},
}

export default Handlers