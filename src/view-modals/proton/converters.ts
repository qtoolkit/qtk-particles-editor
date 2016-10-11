import {ViewModal, IValueConverter, DelegateValueConverter} from "qtk";

function convertRange(value:any, fix:boolean) :any {
	var first = Math.max(0, +value.first);
	var second = Math.max(0, +value.second);
	
	if(fix) {
		return {first : Math.min(first, second), second : Math.max(first, second)};
	}else{
		return {first:first, second:second};
	}
}

function fixRange(value:any) : any {
	return convertRange(value, true);
}

function noChange(value:any) : any {
	return value;
}

export class Converters {
	public static init(viewModal:ViewModal) {
		viewModal.registerValueConverter("life", DelegateValueConverter.create(noChange, fixRange));
		viewModal.registerValueConverter("radius", DelegateValueConverter.create(noChange, fixRange));
	}
};

