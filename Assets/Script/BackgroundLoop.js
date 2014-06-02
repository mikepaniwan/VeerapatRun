#pragma strict

function OnTriggerEnter2D (collider : Collider2D) {
	var boxMap : BoxCollider2D = collider;
	collider.transform.position.x += 5 * (boxMap.size.x-0.40);
}