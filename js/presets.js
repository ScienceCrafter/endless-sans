function Preset(preset) {
	if (preset == "easy") {
		document.getElementById("game_settings_speed").value = 1;
		document.getElementById("game_settings_health").value = 1;
		document.getElementById("game_settings_tolerance").value = 0;
	}
	else if (preset == "medium") {
		document.getElementById("game_settings_speed").value = 1;
		document.getElementById("game_settings_health").value = 0;
		document.getElementById("game_settings_tolerance").value = 2;
	}
	else if (preset == "hard") {
		document.getElementById("game_settings_speed").value = 1.5;
		document.getElementById("game_settings_health").value = 0;
		document.getElementById("game_settings_tolerance").value = 2;
	}
	else if (preset == "friendly") {
		document.getElementById("game_settings_speed").value = 1;
		document.getElementById("game_settings_health").value = 5;
		document.getElementById("game_settings_tolerance").value = -3;
	}
	else if (preset == "healthy hard") {
		document.getElementById("game_settings_speed").value = 1.5;
		document.getElementById("game_settings_health").value = 1;
		document.getElementById("game_settings_tolerance").value = 2;
	}
	else if (preset == "nightmare") {
		document.getElementById("game_settings_speed").value = 2;
		document.getElementById("game_settings_health").value = 0;
		document.getElementById("game_settings_tolerance").value = 3;
	}
	else if (preset == "impossible") {
		document.getElementById("game_settings_speed").value = 3;
		document.getElementById("game_settings_health").value = 0;
		document.getElementById("game_settings_tolerance").value = 4;
	}
	else if (preset == "ninja") {
		document.getElementById("game_settings_speed").value = 0.2;
		document.getElementById("game_settings_health").value = 0;
		document.getElementById("game_settings_tolerance").value = 6;
	}
}
