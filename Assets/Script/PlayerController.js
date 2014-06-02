#pragma strict

function Update () {
	
	
	if(Input.GetKey(KeyCode.Space)) {
		rigidbody2D.velocity.y = 10f; 
	}
	else  {
		transform.position.y = -2.7f;
	}
}