import 'package:flutter/material.dart';

class CustomSlider extends StatelessWidget {
  CustomSlider({
    Key? key,
    required this.text,
    required this.onChanged,
    required this.value,
    required this.max,
    required this.min,
  }) : super(key: key);
  final String text;
  final Function(double) onChanged;
  final double value;
  final double max;
  final double min;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        // mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              text,
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
          ),
          Column(
            // mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              Slider(
                value: value,
                min: min,
                max: max,
                onChanged: onChanged,
              ),
              Row(
                children: <Widget>[
                  Text(
                    min.toString(),
                    style: TextStyle(color: Colors.white, fontSize: 12),
                  ),
                  SizedBox(
                    width: 120,
                  ),
                  Text(
                    max.toString(),
                    style: TextStyle(color: Colors.white, fontSize: 12),
                  ),
                ],
              )
            ],
          ),
        ],
      ),
    );
  }
}
