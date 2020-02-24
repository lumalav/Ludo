//instructions events
        $(document).ready(function(){
            //green buttons on click
            $("#playerGreenB").click(function(){
                $("#enemyGreenB").attr('disabled', 'true');
                $("#playerRedB").attr('disabled', 'true');
                $("#playerBlueB").attr('disabled', 'true');
                $("#playerYellowB").attr('disabled', 'true');
                $("#playerTeam").text("green");
                $("#fakeDice").attr('class', 'btn btn-success');
            });
            $("#enemyGreenB").click(function(){
                $("#playerGreenB").attr('disabled', 'true');
                $("#enemyRedB").attr('disabled', 'true');
                $("#enemyBlueB").attr('disabled', 'true');
                $("#enemyYellowB").attr('disabled', 'true');
                $("#enemyTeam").text("green");
            });
            //red buttons on click
            $("#playerRedB").click(function(){
                $("#enemyRedB").attr('disabled', 'true');
                $("#playerGreenB").attr('disabled', 'true');
                $("#playerBlueB").attr('disabled', 'true');
                $("#playerYellowB").attr('disabled', 'true');
                $("#playerTeam").text("red");
                $("#fakeDice").attr('class', 'btn btn-danger');
            });
            $("#enemyRedB").click(function(){
                $("#playerRedB").attr('disabled', 'true');
                $("#enemyGreenB").attr('disabled', 'true');
                $("#enemyBlueB").attr('disabled', 'true');
                $("#enemyYellowB").attr('disabled', 'true');
                $("#enemyTeam").text("red");
            });
            //blue buttons on click
            $("#playerBlueB").click(function(){
                $("#enemyBlueB").attr('disabled', 'true');
                $("#playerGreenB").attr('disabled', 'true');
                $("#playerRedB").attr('disabled', 'true');
                $("#playerYellowB").attr('disabled', 'true');
                $("#playerTeam").text("blue");
                $("#fakeDice").attr('class', 'btn btn-primary');
            });
            $("#enemyBlueB").click(function(){
                $("#playerBlueB").attr('disabled', 'true');
                $("#enemyGreenB").attr('disabled', 'true');
                $("#enemyRedB").attr('disabled', 'true');
                $("#enemyYellowB").attr('disabled', 'true');
                $("#enemyTeam").text("blue");
            });
            //yellow buttons on click
            $("#playerYellowB").click(function(){
                $("#enemyYellowB").attr('disabled', 'true');
                $("#playerGreenB").attr('disabled', 'true');
                $("#playerRedB").attr('disabled', 'true');
                $("#playerBlueB").attr('disabled', 'true');
                $("#playerTeam").text("yellow");
                $("#fakeDice").attr('class', 'btn btn-warning');
            });
            $("#enemyYellowB").click(function(){
                $("#playerYellowB").attr('disabled', 'true');
                $("#enemyGreenB").attr('disabled', 'true');
                $("#enemyRedB").attr('disabled', 'true');
                $("#enemyBlueB").attr('disabled', 'true');
                $("#enemyTeam").text("yellow");
            });
            $("#closeInstructions").click(function(){
                initGame();
            });
            $("#closeInstructions2").click(function(){
                initGame();  
            });
            $("#goBack1").click(function(){
                window.history.back();  
            });
            $("#goBack2").click(function(){
                window.history.back();  
            });
            $("#goBack3").click(function(){
                window.history.back();  
            });
            $("#goBack4").click(function(){
                window.history.back();  
            });
            $("#dice").click(function(){
                $("#dice").attr('disabled', 'true'); 
            });
        });   
        
        function initGame()
        {
            var enemyColor = $("#enemyTeam").text();
            var playerColor = $("#playerTeam").text();
                
            if( enemyColor.length < 1 || playerColor.length < 1)
            {
               location.reload();
            } 
            else
            {
               if( playerColor === "green" )
               {
                   $("#dice").attr('class', 'btn btn-success');
               } 
               else if(playerColor === "red" )
               {
                   $("#dice").attr('class', 'btn btn-danger');   
               }
               else if(playerColor === "blue" )
               {
                   $("#dice").attr('class', 'btn btn-primary');   
               }
               else if(playerColor === "yellow" )
               {
                   $("#dice").attr('class', 'btn btn-warning');
               }
            }
        }