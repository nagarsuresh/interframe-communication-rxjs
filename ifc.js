var IFC = function () {

    var subject = window.top.document.IFCSubject;
    if (!subject) {
        var subject = new Rx.BehaviorSubject(null);
        window.top.document.IFCSubject = subject;
    }
    function next(val) {
        subject.next(val);
    }
    function subscribe(func) {
        subject.subscribe((value) => {
            func(value);
        });
    }

    return {
        next: next,
        subscribe:subscribe
    }
 }();