function check()
    {
        var question_01 = document.myform.question_01.value;
        var question_02 = document.myform.question_02.value;
        var question_03 = document.myform.question_03.value;
        var count = 0;
        if(question_01 == "c")
        {
            count++;
        }
        if(question_02 == "a")
        {
            count++;
        }
        if(question_03 == "a")
        {
            count++;
        }
        alert("you got " + count + " marks");
    }