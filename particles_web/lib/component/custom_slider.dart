import 'package:flutter_web/material.dart';

class CustomSlider extends StatelessWidget {
  CustomSlider(
      {Key key, this.text, this.onChanged, this.value, this.max, this.min})
      : super(key: key);
  final String text;
  final Function onChanged;
  final double value;
  final double max;
  final double min;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              text,
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(2.0),
            child: Slider(
              value: value,
              min: min,
              max: max,
              onChanged: onChanged,
            ),
          ),
        ],
      ),
    );
  }
}
