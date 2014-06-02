#pragma strict

var CameraSpeed : float ;

function Start () {
	CameraSpeed = 5f;
}

function Update() {
	transform.position.x += CameraSpeed * Time.deltaTime;
}
