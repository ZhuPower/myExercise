<?php
	header("Content-type: text/html; charset=utf-8");
	header('Access-Control-Allow-Origin: *');  
	header("Cache-Control: no-cache, must-revalidate");
	header("Pragma: no-cache");
	header("Expires: -1");

	date_default_timezone_set('PRC');

	$fileName = 'statistics.js';
	//$jsonName = 'var json=';

	$aHash = explode("/",$_GET["hash"]);
	//$_GET["source"]
	//$_GET["ref"]
	//print_r ($aHash);

	if($aHash[1]){
		if(stripos($aHash[1],"?source=")>-1){
            $id = explode("?",$_GET["hash"])[0];
        }else{
            $id = $aHash[1];
        }

		$onOff = preg_match('/[a-z]/i',$id) ? false : true;

		if($onOff){
			$day = date("Y-m-d");
			$day_time = date("Y-m-d H:i:s");

			if($aHash[0]=="member-help-detail"){
		    	$sId = "a_".$id;
		    }else if($aHash[0]=="goods"){
		    	$sId = "g_".$id;
		    }

			$json_string = file_get_contents($fileName);
			$data = json_decode($json_string,true);
			$today_aDate = $data["today"]["aDate"];

			$bDay = array_search($day,$today_aDate);

			$arr_new = createCount($sId,$id,$aHash,$day_time);

			if(gettype($bDay) != "boolean"){
				$bDayId = array_search($sId,$data["today"]["aInfo"][0]["aId"]);

				if(gettype($bDayId) != "boolean"){
					$data["today"]["aInfo"][0]["aInfo"][$bDayId]["count"]++;
					$data["today"]["aInfo"][0]["aInfo"][$bDayId]["time"]=$day_time;
					$data["today"]["aInfo"][0]["aInfo"][$bDayId]["source"][$_GET["source"]]++;
				}else{
					array_unshift($data["today"]["aInfo"][0]["aId"],$sId);
					array_unshift($data["today"]["aInfo"][0]["aInfo"],$arr_new[1]);
				}

				$data["today"]["aInfo"][0]["nCount"]++;
			}else{
				array_unshift($data["today"]["aDate"],$day);

				array_unshift($arr_new[0]["aInfo"],$arr_new[1]);

				array_unshift($data["today"]["aInfo"],$arr_new[0]);	
			}

			$total_aId = $data["total"]["aId"];

			$bId = array_search($sId,$total_aId);

			if(gettype($bId) != "boolean"){
				$data["total"]["aInfo"][$bId]["count"]++;
				$data["total"]["aInfo"][$bId]["time"]=$day_time;
				$data["total"]["aInfo"][$bId]["source"][$_GET["source"]]++;

			}else{
				array_unshift($data["total"]["aId"],$sId);
				array_unshift($data["total"]["aInfo"],$arr_new[1]);
			}

			$data["total"]["nCount"]++;

			//var_dump($data);


			$json_strings = json_encode($data);
    		file_put_contents($fileName,$json_strings,LOCK_EX);//写入
    		//fclose($fileName);
		}   
	}


	function createCount($sId,$id,$aHash,$time){
		$title = getTitle($id,$aHash);

		$arr_id = array($sId);
		$arr_info = array();

		$newTodayInfo = '{"aId":null,"aInfo":null,"nCount": 1}';
		$newCount = '{"id":'.$id.',"title":"'.$title.'","count": 1,"time":"'.$time.'","source":{"yjg": 0,"noPublic": 0,"photo": 0,"other": 0}}';
		
		$a_newTodayInfo = json_decode($newTodayInfo,true);
		$a_newCount = json_decode($newCount,true);

		$a_newCount["source"][$_GET["source"]]++;
		$a_newTodayInfo["aId"] = $arr_id;
		$a_newTodayInfo["aInfo"] = $arr_info;

		$_arr = array();

		array_unshift($_arr,$a_newCount);
		array_unshift($_arr,$a_newTodayInfo);

		return $_arr;
	}

	function getTitle($id,$aHash){
		$title = '';
		if($aHash[0]=="member-help-detail"){
	    	$url = 'http://www.yijiago.com/index.php/topapi?method=content.info&article_id='.$id.'&showLoading=true&v=v3&_rand='.rand(0,999);
	    	$aJson = getJson($url);
	    	$title = $aJson["data"]["title"];
	    }else if($aHash[0]=="goods"){
	    	$url = 'http://www.yijiago.com/promotion/app/rearEnd/mall/yjg.php?productIds='.$id.'&t='.rand(0,999);
	    	$aJson = getJson($url);
	    	$title = $aJson["info"][0]["title"];
	    }
	    return $title;
	}


	function getJson($url){
		$ch = curl_init(); 
		curl_setopt($ch, CURLOPT_URL, $url); 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
		$output = curl_exec($ch); 
		curl_close($ch);
		$json_title = json_decode($output,true);
		return $json_title;
	}







	// 追加写入用户名下文件
	// $code="001";//动态数据
 //    $json_string = file_get_contents("text.json");// 从文件中读取数据到PHP变量
 //    $data = json_decode($json_string,true);// 把JSON字符串转成PHP数组
 //    $data[$code]=array("a"=>"as","b"=>"bs","c"=>"cs");
 //    $json_strings = json_encode($data);
 //    file_put_contents("text.json",$json_strings);//写入
	// //修改

	// $json_string = file_get_contents("text.json");// 从文件中读取数据到PHP变量
 //    $data = json_decode($json_string,true);// 把JSON字符串转成PHP数组
 //    $data["001"]["a"]="aas";
 //    $json_strings = json_encode($data);
 //    file_put_contents("text.json",$json_strings);//写入

	// $file = fopen("test.txt","w+");

	// 排它性的锁定
	// if (flock($file,LOCK_EX))
	//   {
	//   fwrite($file,"Write something");
	//   // release lock
	//   flock($file,LOCK_UN);
	//   }
	// else
	//   {
	//   echo "Error locking file!";
	//   }

	// fclose($file);
	
  	clearstatcache();
?>
