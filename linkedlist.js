const createNode = (value, next) => {
    return { value, next };
}

const createLinkedList = () => {
    let start = null;

    function append(value) {
        const node = createNode(value, null);
        let pos = start;
        if (!pos) {
            start = node;
            Object.assign(this, { start });
            return this;
        }
        while (pos.next != null) pos = pos.next;
        pos.next = node;
        return this;

    }

    function prepend(value) {
        const node = createNode(value, start);
        start = node;
        Object.assign(this, { start });
        return this;
    }

    function size() {
        let pos = start;
        if (!pos) return 0;
        let count = 1;
        while (pos.next != null) {
            count++;
            pos = pos.next;
        }
        return count;
    }

    const head = () => {
        return start;
    }

    const tail = () => {
        let pos = start;
        if (!pos) return null;
        while (pos.next != null) pos = pos.next;
        return pos;
    }

    function at(index) {
        let pos = start;
        while (index > 0) {
            if (pos.next == null) return `Out of bounds. List size is ${size()}.`;
            pos = pos.next;
            index--;
        }
        return pos;
    }

    function pop() {
        let length = size();
        if (length == 0) return this;
        if (length == 1) {
            start = null;
            Object.assign(this, { start });
            return this;
        }
        let pos = start;
        while (length > 2) {
            pos = pos.next;
            length--;
        }
        pos.next = null;
        return this;
    }

    const contains = value => {
        let pos = start;
        if (!pos) return false;
        while (pos.next != null) {
            if (pos.value === value) return true;
            pos = pos.next;
        };
        if (pos.value === value) return true;
        return false;
    }

    function find(value) {
        let pos = start;
        if (!pos) return null;
        for (let i = 0; i < size(); i++) {
            if (this.at(i).value === value) return i;
        }
        return null;
    }

    function toString() {
        let pos = start;
        if (!pos) return 'null';
        let string = ''
        while (pos.next != null) {
            string += `( ${pos.value} ) -> `;
            pos = pos.next;
        }
        string += `( ${pos.value} ) -> null`;
        return string;
    }

    function insertAt(value, index) {
        if (index > size()) return "Index does not exist."
        if (index == size()) append(value);
        else if (index == 0) prepend(value);
        else {
            const node = createNode(value, this.at(index));
            this.at(index - 1).next = node;
        }
    }

    function removeAt(index) {
        if (index >= size()) return "Index does not exist."
        if (index == size() - 1) pop();
        else if (index == 0) {
            start = this.at(1);
            Object.assign(this, { start });
        } 
        else this.at(index - 1).next = this.at(index + 1);
    }

    return {
        start,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

// for testing
let list = createLinkedList();
list.append("London").append("Paris").append("Rome").append("Madrid").append("Beirut");
let emptyList = createLinkedList();