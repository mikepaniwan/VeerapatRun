#pragma strict

var bcamera : Camera;

function Update () {
	//ssDebug.Log(bcamera.transform.position.x - this.transform.position.x);
	if(bcamera.transform.position.x - this.transform.position.x >= 5f){
		Destroy (this);
	}
}