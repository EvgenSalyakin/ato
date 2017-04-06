//1 level

for (var i = 0; i < 2; i++) {
    north();
    map()
}


//2 level

var i = 0;

while (i <= 15) {
    east();
    i++;
    map()
}

//3 level
var i = 0;

while (i <= 13) {
    if (isFree('east')) {
        east(i);
        i++;
        map()
    }
    else {
        south(i);
        i++;
        map()
    }
}
//4 level

var i = 0;

while (i <= 10) {
    if (isFree('east')) {
        east();
        i++;
        map()
    }
    else {
        south();
        i++;
        map()
    }
}

//5 level

function myTop() {
    while (isFree('north')) {
        north();
    }
}

function myRight() {
    while (isFree('east')) {
        east();
    }
}

function myBottom() {
    while (isFree('south')) {
        south();
    }
}

function myLeft() {
    while (isFree('west')) {
        west();
    }
}

myRight();
myBottom();
myLeft();
myBottom();
myLeft();
myTop();
myLeft();
myBottom();
myRight();
myTop();














